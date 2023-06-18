import { CheckCircle } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import moment from "moment"
import { Link } from 'react-router-dom'
import { colors } from "../../constants/colors"

const VideoCard = ({video}) => {
  return (
    <Card sx={{width: {xs:"100%", sm:"360px", md:"320px"}, boxShadow:"none", borderRadius:0}}>
        <Link to={`/video/${video.id.videoId}`} >
      <CardMedia image={video?.snippet?.thumbnails?.high?.url} 
      alt={video?.snippet?.title} 
      sx={{width: {xs:"100%", sm:"360px"}, height:"180px"}}/>
        </Link>
      <CardContent sx={{background: colors.primary, height:"200px", position:"relative"}}>
        <Link to={`/video/${video.id.videoId}`}>
        <Typography my={"5px"} sx={{opacity:".5"}}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant='subtitle1' fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant='subtitle2' sx={{opacity:".6"}}>
          {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
        <Stack 
        direction={"row"} 
        position={"absolute"} 
        bottom={"10px"} 
        alignItems={"center"} 
        gap={"5px"}
        >
           <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
           <Typography variant={"subtitle2"} color={"blue"}>
            {video?.snippet?.channelTitle}
           
           </Typography>
           <CheckCircle sx={{fontSize:"14px", color:"blue", ml:"5px"}}/>
        </Stack>
        </Link>
          
      </CardContent>
    </Card>
  )
}

export default VideoCard
