import React from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
	return (
		<StyledNav>
			<Logo>
				<FontAwesomeIcon className="logo-icon" icon={faDragon} size="2x" />
				<h1>Ignite</h1>
			</Logo>
			<div className="search">
				<input type="text" />
				<button>Search</button>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled(motion.div)`
	padding: 3rem 5rem;
	text-align: center;

	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	}

	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
`;

const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;

	.logo-icon {
		margin-right: 0.5rem;
	}
`;

export default Nav;