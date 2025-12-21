'use client';
import { Button, Text } from '@/common';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import React from 'react';
import { useFieldArray } from 'react-hook-form';

const styles = {
	title: (color) => ({ ml: '0.5rem', color }),
};

const PersonData = ({ blok, color }) => {
	const { svg, title, blocks } = blok;

	const { fields, append, remove } = useFieldArray({
		name: 'persons',
	});

	return (
		<Grid container spacing={1}>
			<Grid size={12} container alignItems={'center'}>
				{svg.filename && (
					<Grid
						component="img"
						alt={svg.alt}
						src={svg.filename}
						width={25}
						height={25}
					/>
				)}
				<Text type="Title" bold sx={styles.title(color)}>
					{title}
				</Text>
				<Button
					variant="outlined"
					sx={{ ml: 'auto' }}
					onClick={() => append({})}
				>
					Add Person
				</Button>
			</Grid>
			{fields.map((field, index) => {
				return (
					<Grid
						container
						key={field.id}
						size={12}
						alignItems="center"
						spacing={2}
					>
						<Grid size={8}>
							<Text type="Text" bold>
								Person {index + 1}
							</Text>
						</Grid>
						<Grid size={4} textAlign={'right'}>
							<Button variant="outlined" onClick={() => remove(index)}>
								Remove
							</Button>
						</Grid>
						{blocks.map((nestedBlok) => (
							<Grid size={{ xs: 6, md: 4 }} key={nestedBlok._uid}>
								<StoryblokComponent
									blok={nestedBlok}
									name="persons"
									index={index}
								/>
							</Grid>
						))}
					</Grid>
				);
			})}
		</Grid>
	);
};

export default PersonData;
