import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Item.css";

export default function Item ({info}) {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={info.avatar_url}
          alt="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.login}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {info.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}