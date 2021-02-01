import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function ProjectMedia({ post }) {
  const classes = useStyles();
  const { image, title, description, githubLink, liveDemoLink } = post.fields;
  const onGithubHandle = () => {
    window.open(githubLink, '_blank');
  };

  const onLiveDemoHandle = () => {
    window.open(liveDemoLink, '_blank');
  };

  return (
    <Card className={classes.root} style={{ margin: '15px' }}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="ReaCT" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={onGithubHandle} size="small" color="primary">
          GITHUB
        </Button>
        <Button onClick={onLiveDemoHandle} size="small" color="primary">
          LIVE DEMO
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectMedia;
