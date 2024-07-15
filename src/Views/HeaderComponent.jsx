import { Menu, MenuButton, MenuItem } from './Menu';
import './Menu/menu.css';
import { SkipLink } from './SkipLink';

export function HeaderComponent() {
    return <header className="header" id="header">
        <SkipLink />
        <Menu>
            <MenuItem text="About" link="/" />
            <MenuButton text="Cats">
                <MenuItem text="Residential Cats" link="/cat#residential" />
                <MenuItem text="Adoptable Cats" link="/cat#adoptable" />
            </MenuButton>
            <MenuButton text="Dogs">
                <MenuItem text="Residential Dogs" link="/dog#residential" />
                <MenuItem text="Adoptable Dogs" link="/dog#adoptable" />
            </MenuButton>
            <MenuItem text="Adoption FAQ" link="/adoption-faq" />
            <MenuItem text="Plan a visit" link="/visit" />
        </Menu>
    </header>;
}