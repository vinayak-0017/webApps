import { Course } from "@/store/atoms/course";
import { Button, Card, Typography } from "@mui/material";
import { useRouter } from "next/router";



function Course({course} : {course : Course}){
    const router = useRouter();

    return <Card style={{
        margin  : 10,
        width : 300,
        minHeight : 200,
        padding : 20
    }}>
        <Typography textAlign={"center"} variant="h5">
           TITLE 
        </Typography>
        <Typography textAlign={"center"} variant="subtitle1">
            Description
        </Typography>
        <img src="https://i.guim.co.uk/img/media/8752ced487fc0ac9e5856a172f2d9c72a2ef776d/0_2065_5792_3475/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d5d4c677734c5ab3aa5b2af49588f869"
        style={{width : 300}}>
        </img>
        <div style={{display : "flex", justifyContent : "center", marginTop : 20}}>
            <Button variant="contained">
                Edit
            </Button>
        </div>

    </Card>
}


export default Course;

