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
        setAnchorEl(() => null);
    };

    return (
        <div className='flex items-center gap-2'>
            <Link href={route.href}>{route.name}</Link>
            <div
                id={`${route.id}-dropdown`}
                aria-controls={open ? `${route.id}-dropdown` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMouseEnter}
                className='cursor-pointer'
                onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleClose}  // Close when hover ends
            >
                <ExpandMoreIcon />
            </div>
            <Menu
                id={`${route.id}-menu`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {route.subRoutes.map((route,index:number) => (
                    <MenuItem key={index}>
                        <Link href={route.href}>
                            <div>{route.name}</div>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}