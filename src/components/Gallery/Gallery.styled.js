import styled from 'styled-components';

export const StyledGallery = styled.div`
	/* border: 1px solid red; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.banner {
		color: ${pr => pr.theme.primaryDark};
		margin: 1% 0;
		&:hover {
			color:  ${pr => pr.theme.primaryHover};
		}
	}
	.grid-container {
		columns: 5 200px;
		column-gap: 1rem;
		width: 90%;
		margin: 0 auto;
		img {
			width: 150px;
			margin: 0 1rem 1rem 0;
			display: inline-block;
			width: 100%;
			padding: 5px;
		}
		@media (max-width: ${({ theme }) => theme.tablet}) {
			columns: 2 200px;
		}
		@media (max-width: ${({ theme }) => theme.mobile}) {
			columns: 1 200px;
		}
	}
`