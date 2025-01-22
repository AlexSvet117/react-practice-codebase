import { useState } from "react"

function Like() {

  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked)
  }

  return (
    <div className="container d-flex justify-content-center my-5">
        <div className="col-2">
            <div className="card border-0">
                <button onClick={toggleLike} className="btn border-0 fs-3"> 
                    {liked ? '💙 Liked' : '🤍 Like'}
                     
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default Like
