import React from "react";

export default function Post() {
  return (
    <>
      {/* <!-- This is the post card when it is in the feed -->
          <!-- - it has a comments section -->
          <!-- - it has a comments form --> */}
      <li className="post">
        <div className="chip active">
          <div className="avatar-small">
            <img
              src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
              alt="Salvador Dali"
            />
          </div>
          <span>Salvador Dali</span>
        </div>
        <div className="post--image">
          <img
            src="https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="undefined"
          />
        </div>
        <div className="post--content">
          <h2>A tree in blossom</h2>
          <p>Spring is finally here... I just love the colours.</p>
        </div>
        <div className="post--comments">
          <h3>Comments</h3>
          <div className="post--comment">
            <div className="avatar-small">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
                alt="Van Gogh"
              />
            </div>
            <p>What a great photo!!</p>
          </div>
          <div className="post--comment">
            <div className="avatar-small">
              <img
                src="https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
                alt="Picasso"
              />
            </div>
            <p>So beautiful... perfect!</p>
          </div>
          <form id="create-comment-form" autoComplete="off">
            <label htmlFor="comment">Add comment</label>
            <input id="comment" name="comment" type="text" />
            <button type="submit">Comment</button>
          </form>
        </div>
      </li>
      {/* <!-- FOR THE CHALLENGE ONLY --> */}
      {/* <!-- This is an example of the preview card in a loading state --> */}
      <div className="post">
        <div className="chip active">
          <div className="avatar-small">
            <img
              src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
              alt="Salvador Dali"
            />
          </div>
          <span>Salvador Dali</span>
        </div>
        <div className="post--image loading-state"></div>
        <div className="post--content">
          <h2 className="loading-state"></h2>
          <p className="loading-state"></p>
        </div>
      </div>
      {/* <!-- This is an example of the preview card for when the preview button is clicked --> */}
      <div className="post">
        <div className="chip active">
          <div className="avatar-small">
            <img
              src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
              alt="Salvador Dali"
            />
          </div>
          <span>Salvador Dali</span>
        </div>
        <div className="post--image">
          <img
            src="https://images.unsplash.com/photo-1620447875063-19be4e4604bc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Talk about standing out!"
          />
        </div>
        <div className="post--content">
          <h2>Talk about standing out!</h2>
          <p>What an amazing way to stand out in nature, beautiful colours!</p>
        </div>
      </div>
    </>
  );
}
