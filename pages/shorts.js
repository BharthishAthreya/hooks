/* eslint-disable react/prop-types */
import React from "react";
import ReactPlayer from "react-player";

const videos = [
  {
    id: 1526909,
    image:
      "https://images.pexels.com/videos/1526909/free-video-1526909.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    url: "https://player.vimeo.com/progressive_redirect/playback/296210754/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=f185d1c0203473bb2e0a094f192944ce5de47cfb6d882a5a8843f180645de4cb",
  },
  {
    id: 5386411,
    image:
      "https://images.pexels.com/videos/5386411/pexels-photo-5386411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630",
    url: "https://player.vimeo.com/progressive_redirect/playback/459389137/rendition/240p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=4aaaae3a469b2295329744259014feb70b4596f1a869a6bc689bb20d987172bc",
  },
  {
    id: 6963395,
    image:
      "https://images.pexels.com/videos/6963395/eco-friendly-environment-environmentally-friendly-mothernature-6963395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630",
    url: "https://player.vimeo.com/progressive_redirect/playback/517090081/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=1bf1ff64e795c18fae5e42098ca9174b4135e03eebb0609c4a2ec26697e12c79",
  },
  {
    id: 7438482,
    image:
      "https://images.pexels.com/videos/7438482/pexels-photo-7438482.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630",
    url: "https://player.vimeo.com/progressive_redirect/playback/534342299/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=d17d6fb0cd5de9655c5f43565a01a97fff50dad77dbd0515f80df4541dde65ca",
  },
  {
    id: 1409899,
    image:
      "https://images.pexels.com/videos/1409899/free-video-1409899.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    url: "https://player.vimeo.com/progressive_redirect/playback/289258217/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=49359f89d2d0546650b814ed3d547a96bc5e9441a403fe296ee6ed96c8dc4f58",
  },
  {
    id: 2169880,
    image:
      "https://images.pexels.com/videos/2169880/free-video-2169880.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    url: "https://player.vimeo.com/progressive_redirect/playback/330412624/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=d483c595618c55028c5721a961bd386e314215ada74c473c1cb7f5f02ffb4a28",
  },
  {
    id: 857251,
    image:
      "https://images.pexels.com/videos/857251/free-video-857251.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    url: "https://player.vimeo.com/progressive_redirect/playback/236075858/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=5330f53daea9e9d97301fd772dca9dfc8a4f70ad2b5563de2b4cddecbca096e4",
  },
  {
    id: 3163534,
    image:
      "https://images.pexels.com/videos/3163534/free-video-3163534.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    url: "https://player.vimeo.com/progressive_redirect/playback/370467553/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=09256c19078802ee5e7769c33951eef3478d4a0552ff23abb0f285d46f33c2a4",
  },
  {
    id: 856973,
    image:
      "https://images.pexels.com/videos/856973/free-video-856973.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    url: "https://player.vimeo.com/progressive_redirect/playback/226685105/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=7c9b0552da19c3bdebeba79f7f1835b60e694a38798909d35ccb5c13c721b6f6",
  },
  {
    id: 857195,
    image:
      "https://images.pexels.com/videos/857195/free-video-857195.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    url: "https://player.vimeo.com/progressive_redirect/playback/189545487/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=c3dcdef6e5211aaabcd74fe9ecb3a6fda3af091f989c9c1b6c6ccc1e414ed290",
  },
];

export default function App() {
  return <Shorts videos={videos} vid={videos[0].id} />;
}

export function Shorts({ vid, videos }) {
  const [activeItem, setActiveItem] = React.useState(vid);
  const videoElementsRef = React.useRef(new Map());
  const videosToRenderAsPlayer = React.useMemo(() => {
    if (videos.length > 1) {
      const currentActiveItemIndex = videos.findIndex(
        (item) => item.id === activeItem
      );
      if (currentActiveItemIndex !== -1) {
        if (currentActiveItemIndex === 0) {
          return [videos[0].id, videos[1].id];
        } else if (currentActiveItemIndex === videos.length - 1) {
          return [
            videos[currentActiveItemIndex - 1].id,
            videos[currentActiveItemIndex].id,
          ];
        } else {
          return [
            videos[currentActiveItemIndex - 1].id,
            videos[currentActiveItemIndex].id,
            videos[currentActiveItemIndex + 1].id,
          ];
        }
      }
    }
    return [];
  }, [activeItem, videos]);

  React.useEffect(() => {
    let lastWheelTimestamp = null;
    function handleWheel(event) {
      const currentTimestamp = new Date().getTime();
      if (lastWheelTimestamp && currentTimestamp - lastWheelTimestamp < 250)
        return;
      lastWheelTimestamp = currentTimestamp;
      setActiveItem((currentActiveItem) => {
        const currentActiveItemIndex = videos.findIndex(
          (item) => item.id === currentActiveItem
        );
        if (currentActiveItemIndex !== -1) {
          if (event.deltaY > 0) {
            if (currentActiveItemIndex !== videos.length - 1) {
              return videos[currentActiveItemIndex + 1].id;
            }
          } else if (event.deltaY < 0) {
            if (currentActiveItemIndex !== 0) {
              return videos[currentActiveItemIndex - 1].id;
            }
          }
        }
        return currentActiveItem;
      });
    }

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [videos]);

  React.useEffect(() => {
    const itemElement = videoElementsRef.current.get(activeItem);
    if (itemElement) {
      itemElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeItem]);

  return (
    <div
      style={{
        overflow: "hidden",
        maxHeight: "98vh",
      }}
    >
      {videos.map((item) => (
        <div
          ref={(ref) => videoElementsRef.current.set(item.id, ref)}
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "98vh",
          }}
        >
          {videosToRenderAsPlayer.includes(item.id) && (
            <ReactPlayer
              url={item.url}
              muted={true}
              playing={activeItem === item.id}
            />
          )}
        </div>
      ))}
    </div>
  );
}
