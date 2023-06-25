'use client'

export default function ErrorHome(props:{error:Error}){
    return <div>ooops! an error ocurred. error : {props.error.message}</div>
}