import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Leofoto from "../../../assets/images/Leofoto.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: 'black',
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: '50%'
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">


                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={Leofoto} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color='white' variant="h1" textAlign='center'>Leonardo Dias</Typography>
                            <Typography color='white' variant="h2" textAlign='center'>Desenvolvedor Web</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        Fale comigo
                                    </Button>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>

                </Container>


            </StyledHero>
        </>
    )
}

export default Hero
