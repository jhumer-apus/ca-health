import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RouteType } from '@/types/route';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    route: RouteType
}
export default function DropDownMenu(props:Props) {

    const { route } = props

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(() => event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log("halaa")
        setAnchorEl(() => null);
    };

    return (
        <div className=''>
            <div
                id={`${route.id}-dropdown`}
                aria-controls={open ? `${route.id}-dropdown` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMouseEnter}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleClose}  // Close when hover ends
                className='flex items-center'
            >
                <p>{route.name}</p>
                <ExpandMoreIcon />
            </div>
            <Menu
                id={`${route.id}-menu`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {route.subRoutes.map(route => (
                    <MenuItem>
                        <Link href={route.href}>
                            <div>{route.name}</div>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}