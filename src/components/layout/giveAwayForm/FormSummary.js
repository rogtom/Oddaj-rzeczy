import React from "react";
import { List, ListItem, ListItemText } from '@material-ui/core/';


export const FormSummary = (props) => {

    const { values } = props;
    return (
        <>
            <div>
                <List>
                    <ListItem>
                        <ListItemText
                            primary='Co oddajesz?'
                            secondary={values.whatToGiveCheck.map((el, i ) => <p key={i}>{el}</p>)}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Liczba worków'
                            secondary={values.bagNumber}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Lokalizacja'
                            secondary={values.location}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Kto dostanie'
                            secondary={values.whoGetCheck.map((el,i) => <p key={i}>{el}</p>)}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Nazwa organizacji'
                            secondary={values.organizationName}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='State'
                            // secondary={state}
                        />
                    </ListItem>
                </List>
            </div>
        </>
    );
}