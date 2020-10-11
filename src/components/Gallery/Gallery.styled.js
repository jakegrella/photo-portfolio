import styled from 'styled-components';

export const StyledGallery = styled.div`
    /* border: 1px solid red; */
	margin: 5% 10% 0;
	display: flex;
	flex-flow: row wrap;
	img {
		width: 25%;
		object-fit: cover;
		padding: 0.5% 0.5%;
	}
	.banner {
		flex-basis: 100%;
		text-align: center;
		margin-bottom: 2%;
	}
	.banner Link {
		color: ${pr => pr.theme.primaryDark};
		&:hover {
			color: ${pr => pr.theme.primaryHover};
		}
	}
	@media (max-width: ${({ theme }) => theme.tablet}) {
		margin: 5% 5% 0;
		img {
			width: 50%;
		}
	}
	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin: 5% 5% 0;
		img {
			width: 100%;
		}
	}
`