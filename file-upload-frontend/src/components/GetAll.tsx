import { useEffectAfterMount } from "@react-hooks-library/core";
import axios from "axios";
import { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import CardItem from "./CardItem";
import { newFunction } from "./newFunction";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const GetAll = () => {
  // const [response, loading, hasError] = useFetch('http://localhost:5100/api/v1/file');

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  let url = "http://localhost:5100/api/v1/file";

  useEffectAfterMount(() => {
    console.log("useEffectAfterMount");
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setHasError(true);
        setLoading(false);
      });
  }, [url]);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="list_header p-2 bg-light rounded-3">
        <h1 className="">The List</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {response?.map((res: any) => {
            return newFunction(res, expanded, handleExpandClick);
            // <CardItem data={res}/>
            // <Card sx={{ maxWidth: 345 }} key={res.filename} className="m-4">
            //   <CardHeader
            //     avatar={
            //       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //         R
            //       </Avatar>
            //     }
            //     action={
            //       <IconButton aria-label="settings">
            //         <MoreVertIcon />
            //       </IconButton>
            //     }
            //     title={res.filename}
            //     subheader={res.createdAt}
            //   />
            //   <CardMedia
            //     component="img"
            //     height="194"
            //     image={"http://localhost:5100/static/uploads/" + res.filename}
            //     alt={res.originalname}
            //   />
            //   <CardContent>
            //     <Typography variant="body2" color="text.secondary">
            //       This impressive paella is a perfect party dish and a fun meal
            //       to cook together with your guests. Add 1 cup of frozen peas
            //       along with the mussels, if you like.
            //     </Typography>
            //   </CardContent>
            //   <CardActions disableSpacing>
            //     <IconButton aria-label="add to favorites">
            //       <FavoriteIcon />
            //     </IconButton>
            //     <IconButton aria-label="share">
            //       <ShareIcon />
            //     </IconButton>
            //     <ExpandMore
            //       expand={expanded}
            //       onClick={handleExpandClick}
            //       aria-expanded={expanded}
            //       aria-label="show more"
            //     >
            //       <ExpandMoreIcon />
            //     </ExpandMore>
            //   </CardActions>
            //   <Collapse in={expanded} timeout="auto" unmountOnExit>
            //     <CardContent>
            //       <Typography paragraph>{res.originalname}</Typography>
            //       <Typography paragraph>
            //         Heat 1/2 cup of the broth in a pot until simmering, add
            //         saffron and set aside for 10 minutes.
            //       </Typography>

            //       <Typography>
            //         Set aside off of the heat to let rest for 10 minutes, and
            //         then serve.
            //       </Typography>
            //     </CardContent>
            //   </Collapse>
            // </Card>;
          })}
        </Box>
      )}
    </>
  );
};
