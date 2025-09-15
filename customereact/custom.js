const maincontainer=document.getElementById('root');

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit'
}

function createcontainer(reactElement,container){
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if (prop==='children') continue;//if we going on in for loop and children exists it means we don;t have to set attribute
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
createcontainer(reactElement,maincontainer)