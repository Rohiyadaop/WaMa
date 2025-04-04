import '../style/header.css'
function header() {

    return (<>
       <body>  
       <nav class="navbar">
        <div class="logo">
            <img src= "" alt="WaMa logo"></img>
            <span>WaMa</span>
        </div>
        <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="buyer">buyer</a></li>
            <li><a href="sheller">sheller</a></li>
            <li><a href="Skilltraning">Skill traning </a></li>
            <li><a href="about">about</a></li>
            <li><a href="login">Contact</a></li>
        </ul>
        <div class="search-box">
            <input type="text" placeholder="Search about product "></input>
            <button>🔍</button>
        </div>
    </nav>
</body>
    </>)
}
export default header;