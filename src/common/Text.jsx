import { Typography } from '@mui/material';
import { monoFont, normFont } from '../app/constants';

const TYPE_CONFIG = {
	BigTitle: { variant: 'button', fontSize: '1rem' },
	Title: { variant: 'button', fontSize: '0.75rem' },
	Subtitle: { variant: 'h6', fontSize: '0.688rem', textTransform: 'uppercase' },
	Text: { variant: 'h6', fontSize: '0.75rem' },
	p: { variant: 'h6', fontSize: '0.8125rem' },
	body: { variant: 'h6', fontSize: '0.875rem' },
	caption: { variant: 'h6', fontSize: '0.5625rem', textTransform: 'uppercase' },
};

// Gets the brand-specific font family
const getBrandFont = (fontType) => {
	if (fontType === 'primary') return monoFont.style.fontFamily;
	return normFont.style.fontFamily;
};

// Gets font weight based on props
const getFontWeight = (light, bold) => {
	if (light) return 300;
	if (bold) return 700;
	return 400;
};

const styles = {
	text: (fontType, light, bold) => ({
		color: 'inherit',
		fontFamily: getBrandFont(fontType),
		fontWeight: getFontWeight(light, bold),
		lineHeight: 1,
	}),
};

const Text = ({
	children,
	component = 'div',
	fontType = 'primary',
	sx = {},
	type = 'p',
	variant = null,
	color = 'primary',
	light = false,
	bold = false,
	...others
}) => {
	const config = TYPE_CONFIG[type] || TYPE_CONFIG.p;

	return (
		<Typography
			sx={[
				styles.text(fontType, light, bold),
				config,
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			variant={variant || config.variant}
			component={component}
			{...others}
		>
			{children}
		</Typography>
	);
};

export default Text;
