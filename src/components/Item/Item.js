import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Item ({data}) {
  return (
    <Card sx={{ maxWidth: 350, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={data.avatar_url}
          alt="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.login}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}