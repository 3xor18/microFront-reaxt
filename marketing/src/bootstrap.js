import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// se llama al comenzar la app
const mount = (el) => {
	ReactDOM.render(<App />, el);
};

// si estamos en develop y en ambiente separado
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector(
		'#_marketing-dev-root'
	);

	if (devRoot) {
		mount(devRoot);
	}
}

// Si no estamos en dev, mandamos al container
export { mount };
