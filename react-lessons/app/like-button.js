'use client';     // this is a client component tells react to render the component on client side
import { useState } from "react";

export default function LikeButton() {

    const [likes, setLikes] = useState(0);
    function handleClick() {
      setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>
}