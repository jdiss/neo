import MainContainer from './MainContainer.mjs';

const onStart = () => Neo.app({
    appPath : 'examples/charts/',
    mainView: MainContainer,
    name    : 'TestApp'
});

export {onStart as onStart};