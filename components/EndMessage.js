import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

const SelectedCity = ({ }) => {
    return (
        <Paper style={{ marginTop: '2em', padding: '1em' }}>

            <Typography type="headline">Merci, demande de rendu envoyé</Typography>
            <Divider style={{ margin: '1em' }} />
            <Typography type="subheading" color="secondary" align='center'>
                Nous reviendrons très prochainement vers vous par email avec le rendu pour la découpe laser
            </Typography>

            <Button raised color='accent' style={{ width: '100%', marginTop: '1em' }} onTouchTap={(() => document.location.reload())}>Nouvelle Recherche</Button>
        </Paper>
    );
};


export default SelectedCity;