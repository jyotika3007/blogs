import React from "react";

function LeaveComment(){
    return(
    
        <div className='singlePost__addReview'>
                            <h1>Leave a Reply</h1>
                            <p>your email address will not be published. required fields are marked *</p>
                            <form className="singlePost__form">
                                <div className='singlePost__formDiv'>
                                    <div className='singlePost__formInput'>
                                        <label>Name *</label>
                                        <input type="text" />
                                    </div>
                                    <div className='singlePost__formInput'>
                                        <label>Email *</label>
                                        <input type="email" />
                                    </div>
                                    <div className='singlePost__formInput'>
                                        <label>Website *</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='singlePost__formTextarea'>
                                    <textarea rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className='singlePost__formButton'>
                                    <button className='primary-button' >Submit</button>
                                </div>
                            </form>
                        </div>
                    
    )
}

export default LeaveComment;