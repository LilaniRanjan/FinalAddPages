import React,{Component} from "react";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import FormControl from "@material-ui/core/FoSrmControl";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';



const style = {
  papersty: {
    minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 20,
  },
  cardsty: {
    minWidth: 270,
    backgroundColor:'#fafafa',
    margin: 20
  }
}

export default class AddPets extends Component {
   constructor(props){
     super(props);
     this.state = {
       title: '',
       price:'',
       imageUrl:'',
       phoneNumber:''
       };

       this.handleTitleChange = this.handleTitleChange.bind(this);
       this.handlePriceChange = this.handlePriceChange.bind(this);
       this.handleimageUrlChange = this.handleimageUrlChange.bind(this);
       this.handlephoneNumberUrlChange = this.handlephoneNumberUrlChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleimageUrlChange(event) {
    this.setState({imageUrl: event.target.value});
  }

  handlephoneNumberUrlChange(event) {
    this.setState({phoneNumber: event.target.value});
  }

  handleSubmit(event) {
    alert('Pet details are submitted' );
    event.preventDefault();
  }

  render(){

    return(
      <>
        <Grid container spacing={3}>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <form onSubmit={this.handleSubmit}>
            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={8}>
                <CardContent style={style.cardsty}>
                  <CardActions>
                    <CardContent>
                      <FontAwesomeIcon icon={faEdit}/>Add New Pets
                      <br/>
                      <br/>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Title"
                            label="Pet's Title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            helperText="Enter Pet's Name"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="price"
                            label="Pet's price"
                            value={this.state.price}
                            onChange={this.handlePriceChange}
                            helperText="Enter Pet's price"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="imageUrl"
                            label="Pet's imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleimageUrlChange}
                            helperText="Enter Pet's imageUrl"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="PhNumber"
                            label="Pet's owner Ph.No"
                            value={this.state.phoneNumber}
                            onChange={this.handlephoneNumberUrlChange}
                            helperText="Enter Pet's owner Contact Number"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      </Grid>
                    </CardContent>
                  </CardActions>
                  <CardActions>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained"  
                          type="submit"
                          value="Submit"
                          startIcon={<SaveIcon />}>
                            <span>Save</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          type="Reset" 
                          startIcon={<RotateLeftOutlinedIcon />}>
                            <span>Reset</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                    </CardActions>
                </CardContent>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
            </form>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </>
    )
  }
}
