import React from "react";
import PersonIcon from '@mui/icons-material/Person';

function Reviews(){
return(

    <div className='singlePost__reviews'>
    <h1>3 comments</h1>
    <div className='singlePost__comments'>
        <ul>
            <li>
                <div className='singlePost__comment'>
                    <PersonIcon />
                    <div className='singlePost__userInfo'>
                        <h4 className='singlePost__userName'> Name ABC</h4>
                        <h4>March 27, 2021 at 8:00 am  <button>Reply</button> </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>

                <ul className='singlePost__commentChild'>
                    <li>
                        <div className='singlePost__comment'>
                            <PersonIcon />
                            <div className='singlePost__userInfo'>
                                <h4 className='singlePost__userName'> Name ABC</h4>
                                <h4>March 27, 2021 at 8:00 am  <button>Reply</button> </h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                    </li>

                </ul>
            </li>
            <li>
                <div className='singlePost__comment'>
                    <PersonIcon />
                    <div className='singlePost__userInfo'>
                        <h4 className='singlePost__userName'> Name ABC</h4>
                        <h4>March 27, 2021 at 8:00 am  <button>Reply</button> </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>

                <ul className='singlePost__commentChild'>
                    <li>
                        <div className='singlePost__comment'>
                            <PersonIcon />
                            <div className='singlePost__userInfo'>
                                <h4 className='singlePost__userName'> Name ABC</h4>
                                <h4>March 27, 2021 at 8:00 am  <button>Reply</button> </h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                    </li>

                </ul>
            </li>
        </ul>
    </div>

</div>
)
}

export default Reviews;

