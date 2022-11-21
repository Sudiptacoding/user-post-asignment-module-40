import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import './UserCard.css';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard(props) {
    const { body, title, userId, id } = props.post;

    const Slice = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        }
        else {
            return str;
        }
    }

    return (
        <div className='box'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h3>{Slice(title, 19)}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>{Slice(body, 130)}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link className='more__link' to='/more' state={{ body, title, userId, id }}>Read More</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}