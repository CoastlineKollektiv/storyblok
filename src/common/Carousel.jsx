import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  IconButton,
  Slide,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ExpandMoreIcon } from './svgs';

const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden'
  },
  prevButton: {
    color: 'common.white',
    borderRadius: '50%',
    p: '2px'
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    mx: 0.5,
    cursor: 'pointer'
  },
  activeDot: { bgcolor: 'text.primary' },
  inactiveDot: { bgcolor: 'colors.disabled' },
  prevButtonWrap: { textAlign: 'left' },
  nextButton: {
    color: 'common.white',
    ml: 'calc(100% - 90px)',
    p: '2px',
    borderRadius: '50%'
  },
  nextButtonWrap: { textAlign: 'right' },
  nextSideButton: {
    position: 'absolute',
    color: 'common.black',
    top: '45%',
    right: -60
  },
  prevSideButton: {
    position: 'absolute',
    color: 'common.black',
    top: '45%',
    left: -60
  },
  nextBtnPosition: {
    position: 'absolute',
    bgcolor: 'colors.dotColor',
    '&:disabled': { color: 'colors.disabled' },
    '&:hover': { bgcolor: 'grey' },
    top: '45%',
    right: 10
  },
  prevBtnPosition: {
    position: 'absolute',
    bgcolor: 'colors.dotColor',
    '&:disabled': { color: 'colors.disabled' },
    '&:hover': { bgcolor: 'grey' },
    top: '45%',
    left: 10
  },
  container: { mt: 0 }
};

function hideElement(x) {
  // eslint-disable-next-line no-param-reassign
  x.style.display = 'none';
}

function Swiper(props) {
  const {
    containerProps = {
      alignItems: 'center',
      justifyContent: 'center',
      spacing: 2,
      containerStyles: []
    },
    value,
    slideDirection,
    viewSlide
  } = props;
  const { containerStyles, justifyContent, alignItems, spacing } =
    containerProps;

  return (
    <Slide
      direction={slideDirection}
      in={value === viewSlide.key}
      mountOnEnter
      onExit={hideElement}
      timeout={{
        enter: 500,
        exit: 500
      }}
      unmountOnExit
    >
      <Grid
        alignItems={alignItems}
        container
        justifyContent={justifyContent}
        spacing={spacing}
        sx={[
          styles.container,
          ...(Array.isArray(containerStyles)
            ? containerStyles
            : [containerStyles])
        ]}
      >
        {viewSlide.slides.map(slide => (
          <Grid key={slide.key} size="grow">
            {slide.content}
          </Grid>
        ))}
      </Grid>
    </Slide>
  );
}

Swiper.propTypes = {
  containerProps: PropTypes.object,
  slideDirection: PropTypes.string.isRequired,
  slides: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  viewSlide: PropTypes.object.isRequired
};

function Dot(props) {
  const { slide, index, setSlideDirection, setValue, value } = props;

  const paginationClick = useCallback(() => {
    if (index + 1 < value) setSlideDirection('right');
    else setSlideDirection('left');
    setValue(slide.key);
  }, [index, setSlideDirection, setValue, slide.key, value]);

  return (
    <Grid
      onClick={paginationClick}
      sx={[
        styles.dot,
        value === slide.key && styles.activeDot,
        value !== slide.key && styles.inactiveDot
      ]}
    />
  );
}

Dot.propTypes = {
  index: PropTypes.number.isRequired,
  setSlideDirection: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  slide: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired
};

function Carousel(props) {
  const {
    sx,
    slides,
    slidesPerView = 3,
    buttonType = 'onImage',
    isCircular = false,
    isAutoPlay = false,
    isSlideSkip = true,
    isDesktopSwipe = true,
    autoPlayDuration = 5000,
    containerProps = {},
    showDots = false
  } = props;
  const { containerStyles, spacing } = containerProps;
  const theme = useTheme();
  const [value, setValue] = useState(1);
  const [viewSlides, setViewSlides] = useState([]);
  const [slideDirection, setSlideDirection] = useState('left');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handlePrev = useCallback(() => {
    if ((isCircular || isAutoPlay) && value === viewSlides[0].key)
      setValue(viewSlides.length);
    else setValue(value - 1);
    setSlideDirection('right');
  }, [isAutoPlay, isCircular, value, viewSlides]);

  const handleNext = useCallback(() => {
    if ((isCircular || isAutoPlay) && value === viewSlides.length)
      setValue(viewSlides[0].key);
    else setValue(value + 1);
    setSlideDirection('left');
  }, [isAutoPlay, isCircular, value, viewSlides]);

  const getFinalValue = useCallback(
    (start, move) => {
      if (start > move) {
        if (value !== viewSlides.length) setValue(value + 1);
        else if (isCircular) setValue(1);
      } else if (start < move) {
        if (value !== 1) setValue(value - 1);
        else if (isCircular) setValue(viewSlides.length);
      }
    },
    [isCircular, value, viewSlides.length]
  );

  const handleTouchMove = useCallback(
    e => {
      touchEndX.current = isDesktopSwipe
        ? e.clientX
        : e.changedTouches[0].screenX;
      const start = Math.ceil(touchStartX.current);
      const move = Math.ceil(touchEndX.current);
      if (Math.abs(start - move) > 20)
        getFinalValue(start, move, isCircular || isAutoPlay);
    },
    [isDesktopSwipe, getFinalValue, isCircular, isAutoPlay]
  );

  const handleTouchStart = useCallback(
    e => {
      touchStartX.current = isDesktopSwipe
        ? e.clientX
        : e.changedTouches[0].screenX;
    },
    [isDesktopSwipe]
  );

  const moveOneSlide = useCallback(() => {
    let slidesInView = [];
    const arr = [];
    let count = 1;
    for (let i = 0; i < slides.length; i += 1) {
      slidesInView.push({ ...slides.slice(i, slidesPerView + i) });
      if (i <= slides.length - slidesPerView || slidesPerView === 1) {
        arr.push({ key: count, slides: slidesInView });
        count += 1;
        slidesInView = [];
      }
    }
    return arr;
  }, [slides, slidesPerView]);

  const skipWholeSlide = useCallback(() => {
    let slidesInView = [];
    const arr = [];
    let count = 1;
    const isDivisible = slides.length % slidesPerView;
    const quo = Math.floor(slides.length / slidesPerView);
    for (let i = 0; i < quo * slidesPerView; i += slidesPerView) {
      slidesInView.push(...slides.slice(i, slidesPerView + i));
      arr.push({ key: count, slides: slidesInView });
      count += 1;
      slidesInView = [];
    }
    if (isDivisible) {
      slidesInView.push(
        ...slides.slice(slides.length - slidesPerView, slides.length)
      );
    }
    return arr;
  }, [slides, slidesPerView]);

  useEffect(() => {
    if (slidesPerView) {
      let arr;
      if (isSlideSkip) arr = skipWholeSlide();
      else arr = moveOneSlide();
      setViewSlides(arr);
    }
    const start = isDesktopSwipe ? 'mousedown' : 'touchstart';
    const end = isDesktopSwipe ? 'mouseup' : 'touchend';
    const swipeEle = document.getElementById('swiper');
    swipeEle.addEventListener(start, handleTouchStart);
    swipeEle.addEventListener(end, handleTouchMove);
    return () => {
      swipeEle.removeEventListener(start, handleTouchStart);
      swipeEle.removeEventListener(end, handleTouchMove);
    };
  }, [
    isDesktopSwipe,
    handleTouchMove,
    handleTouchStart,
    moveOneSlide,
    skipWholeSlide,
    isSlideSkip,
    slidesPerView
  ]);

  useEffect(() => {
    let ref;
    if (isAutoPlay) ref = setInterval(() => handleNext(), autoPlayDuration);
    return () => {
      clearInterval(ref);
    };
  }, [isAutoPlay, autoPlayDuration, handleNext]);

  return (
    <Grid
      id="swiper"
      sx={[
        styles.wrapper,
        buttonType === 'side' && { overflow: 'visible' },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      {viewSlides.map(viewSlide => (
        <Swiper
          key={viewSlide.key}
          slideDirection={slideDirection}
          value={value}
          viewSlide={viewSlide}
          {...props}
        />
      ))}
      {viewSlides.length > 1 && (
        <Grid
          alignItems="center"
          container
          justifyContent={showDots ? 'center' : 'space-between'}
          spacing={spacing}
          sx={[
            ...(Array.isArray(containerStyles)
              ? containerStyles
              : [containerStyles])
          ]}
        >
          {!isSmallScreen && (
            <Grid
              sx={[styles.prevButtonWrap, showDots && styles.prevBtnWrap]}
              size={1}
            >
              <IconButton
                disabled={
                  !(isCircular || isAutoPlay) && value === viewSlides[0].key
                }
                onClick={handlePrev}
                sx={[
                  styles.prevButton,
                  buttonType === 'onImage' && styles.prevBtnPosition,
                  buttonType === 'side' && styles.prevSideButton
                ]}
              >
                <ExpandMoreIcon
                  direction="left"
                  width={buttonType === 'side' ? 48 : 18}
                  height={buttonType === 'side' ? 48 : 18}
                />
              </IconButton>
            </Grid>
          )}
          {showDots && (
            <Grid
              alignItems="center"
              container
              justifyContent="center"
              size={10}
            >
              {viewSlides.map((slide, index) => (
                <Dot
                  key={slide.key.toString()}
                  index={index}
                  setSlideDirection={setSlideDirection}
                  setValue={setValue}
                  slide={slide}
                  value={value}
                />
              ))}
            </Grid>
          )}
          {!isSmallScreen && (
            <Grid sx={[styles.nextButtonWrap]} size={1}>
              <IconButton
                disabled={
                  !(isCircular || isAutoPlay) &&
                  value === viewSlides[viewSlides.length - 1].key
                }
                onClick={handleNext}
                sx={[
                  styles.nextButton,
                  buttonType === 'onImage' && styles.nextBtnPosition,
                  buttonType === 'side' && styles.nextSideButton
                ]}
              >
                <ExpandMoreIcon
                  direction="right"
                  width={buttonType === 'side' ? 48 : 18}
                  height={buttonType === 'side' ? 48 : 18}
                />
              </IconButton>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
}

Carousel.propTypes = {
  autoPlayDuration: PropTypes.number,
  containerProps: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ]),
  isAutoPlay: PropTypes.bool,
  isCircular: PropTypes.bool,
  isDesktopSwipe: PropTypes.bool,
  isSlideSkip: PropTypes.bool,
  slides: PropTypes.array.isRequired,
  slidesPerView: PropTypes.number.isRequired
};

export default Carousel;
