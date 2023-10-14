import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const GalleryNavigation = (harvardArt) => {
    console.log(harvardArt.harvardArt.records);
    const galleries = harvardArt.harvardArt.records;
    return (
        <nav>
            <h1>
                <NavLink to="/">Gallery</NavLink>
            </h1>
            <ul>
                {galleries.map((gallery) => (
                    <li key={gallery.id}>
                        <NavLink
                            to={`/galleries/${gallery.id}`} >
                            {gallery.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav >
    );
};

export default GalleryNavigation;
