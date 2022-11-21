import { useEffect, useState } from 'react';
import './Comment.css';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Comment = (props) => {

    const { body, email, name, userId } = props.comment;
    const names = name.slice(0, 40);
    const [random, setRandom] = useState([]);
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${userId}`)
            .then(res => res.json())
            .then(data => setRandom(data.results[0].picture.large));
    }, []);

    return (
        <div className='comment_Box'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className='s_box'><div><img src={random} alt="" /></div>
                        <div className='sp'>
                            <h2>{names}</h2>
                            <h3>Email : {email}</h3>
                            <span><h6>To see This Comment Please Click This Div</h6></span>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <hr />
                            <h2>{body}</h2>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Comment;