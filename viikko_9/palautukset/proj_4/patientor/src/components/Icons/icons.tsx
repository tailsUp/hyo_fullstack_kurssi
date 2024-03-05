import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkIcon from '@mui/icons-material/Work';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export const entryCase = (n: number) => {
    if(n.toString() === '0') 
    {
        return <WorkIcon />;
    } 
    else 
    {
        return <MedicalServicesIcon style={{ color: 'red' }} />;
    }
};

export const coloredHeart = (n: number | undefined) => {
    if(n === undefined)
    {
        return null;
    }
    else if(n.toString() === '0') 
    {
        return <FavoriteIcon name="heartZero" sx={{ color: 'red' }} />;
    } 
    else if(n.toString() === '1') 
    {
        return <FavoriteIcon sx={{ color: 'orange' }} />;
    } 
    else if(n.toString() === '2') 
    {
        return <FavoriteIcon sx={{color: "yellow"}} />;
    }
    else 
    {
        return <FavoriteIcon style={{ color: 'green' }} />;
    }
};
