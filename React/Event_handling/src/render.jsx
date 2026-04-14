import proptypes from 'prop-types';
function render(props) {

    const Logdetail = props.name;
    const clickHandler = (e) => e.target.textContent = `${Logdetail} Ouch!`
    
    return(<>
    <h1>Welcome {Logdetail}</h1>
    <button type="button" onClick={(e) => clickHandler(e)}>Click Here {Logdetail}!</button>
    
    </>)
}
render.prototype = {
    name: proptypes.string.isRequired
}
export default render;