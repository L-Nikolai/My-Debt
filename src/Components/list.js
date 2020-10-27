import React from 'react';

import ListItem from './list-item';
import '../css/list.css';

const List = ({posts, onDelete}) => {

    const elements = posts.map((item) => {

        if ( typeof item === 'object'){

            const {id,...props} = item;
            return(
                
                    <li key = {id}>
                        <ListItem
                        {...props}
                        onDelete = {()=> onDelete(id)}/>
                        
                    </li>
                
            ) 
        } 
       
        
    })

    

    return (
        <ul className = "list">
            {elements}
        </ul>
    )
   
}

export default List;