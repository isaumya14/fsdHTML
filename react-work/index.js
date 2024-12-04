console.log("hello");
const parent=document.getElementById('root')
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"blue"}},"Abes engineering college");
// const l1=React.createElement("li",{style:{color:"orange"}},"orange");
// const l2=React.createElement("li",{style:{color:"green"}},"mango");
// const ul=React.createElement("ul",{style:{backgroundColor:"beige"}},[l1,l2]);

//JSX
const h2=<h2>hello world </h2>
const l1=<li>orange</li>
const l2=<li>mango</li>
const ul=<ul style={{color:'red'}}>{l1}{l2}</ul>

const container=(
    <div style={{backgroundColor: 'plum'}}>
        {h2}
        <div>{ul}</div>
    </div>
)

root.render(container);
