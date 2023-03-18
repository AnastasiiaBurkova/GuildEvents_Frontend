import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Moment from "moment";
import { EventPopupStyle } from './EventPopupStyle';
import { Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EventPopup = ({ openPopup, setOpenPopup }) => {
    return (
        <Modal
            open={openPopup.isOpen}
            onClose={() => setOpenPopup({ isOpen: false, item: null })}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={EventPopupStyle}>
                <Grid container justifyContent={'end'}>
                    <Grid item>
                        <IconButton onClick={() => setOpenPopup({ isOpen: false, item: null })}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={'bold'}>
                    {openPopup?.item?.event?.title}
                </Typography>
                <Typography id="modal-modal-startDate" mt={2} >
                    <strong>Starting from:</strong> {Moment(openPopup?.item?.event?.start).format('HH:MM - DD.MM.YYYY')}
                </Typography>
                <Typography id="modal-modal-description" mt={2} whiteSpace={'pre-line'}>
                    {openPopup?.item?.event?.extendedProps?.description}
                </Typography>
                <Typography id="modal-modal-location" mt={2} >
                    <strong>Location:</strong> {openPopup?.item?.event?.extendedProps?.location}
                </Typography>
                <Typography id="modal-modal-organizer" mt={2} >
                    <strong>Organizer:</strong> {openPopup?.item?.event?.extendedProps?.guild}
                </Typography>
            </Box>
        </Modal>
    );
}

export { EventPopup }
