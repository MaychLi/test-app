import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {RepositoryCardProps} from "./types";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import {Link} from "@mui/material";
import {AddFeature} from "./AddFeature";
import {Logo} from "./Logo";

export const RepositoryCard = ({addFeatureButton, id, logoUrl, title, starsAmount, forksAmount, linkUrl}: RepositoryCardProps) => {
  return (
    <Card elevation={4} className="p-20" style={{position: "relative"}}>
      <CardContent>
        {addFeatureButton && (
          <AddFeature id={id} logoUrl={logoUrl} title={title} starsAmount={starsAmount} forksAmount={forksAmount} linkUrl={linkUrl} />
        )}
        <Logo src={logoUrl}></Logo>
        <Typography variant="h5" style={{textTransform: "capitalize", marginBottom: "10px"}}>
          {title}
        </Typography>
        <div className="d-flex gap-5 mt-10">
          <StarIcon fontSize="small" />
          {starsAmount}
        </div>
        <div className="d-flex gap-5 mt-10">
          <ForkRightIcon fontSize="small" />
          {forksAmount}
        </div>
      </CardContent>
      <CardActions>
        <Link href={linkUrl} target="_blank">
          <Button variant="contained">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
