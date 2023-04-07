'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import imgHeader from '../../assets/paginaInicial/foto-estudiantes.png';

const HeaderHome = () => {
	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('.header-home__title');
			if (header && window.scrollY > 0) {
				header.classList.add('--scrolled');
			} else {
				header.classList.remove('--scrolled');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<header className="header-home">
				<Image
					src={imgHeader}
					alt="imagen estudiantes"
					className="header-home__image"
					quality={100}
				/>
				<h1 className="header-home__title">
					Filantropia <span>eafit</span>
				</h1>
			</header>
		</>
	);
};

export default HeaderHome;