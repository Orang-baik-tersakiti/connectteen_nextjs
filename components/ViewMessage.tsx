import { Music, User, Clock, ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

interface MessageViewPageProps {
  messageId?: string;
  onBack: () => void;
}

export function MessageViewPage({ messageId, onBack }: MessageViewPageProps) {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, user: "Taylor K.", text: "This song is amazing! Thanks for sharing 🎵", time: "2 hours ago" },
    { id: 2, user: "Michael S.", text: "Added it to my playlist immediately!", time: "5 hours ago" }
  ]);

  const message = {
    id: messageId || "1",
    from: "Emma R.",
    recipient: "Sarah M.",
    message: "Hey! Just discovered this amazing song, you have to listen to it! It reminds me of our trip last summer 🌅 The lyrics are so powerful and the melody just takes me back to those sunset walks on the beach. Every time I hear it, I can almost feel the sand between my toes and smell the ocean breeze. I really think you'll love this one - it has that same vibe as the music we listened to during our road trip!",
    song: {
      title: "Just The Way You Are",
      artist: "Bruno Mars",
      album: "Doo-Wops & Hooligans",
    },
    timestamp: "Today, 3:45 PM",
    likes: 156,
    commentCount: 23
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([
        { id: comments.length + 1, user: "You", text: comment, time: "Just now" },
        ...comments
      ]);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 -ml-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Message Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          {/* Message Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full p-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl text-gray-900">
                    {message.from} → {message.recipient}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4" />
                    {message.timestamp}
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                {message.message}
              </p>
            </div>
          </div>

          {/* Song Section */}
          <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
              <Music className="w-4 h-4" />
              <span>Song shared with this message</span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cyan-200">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-4 flex-shrink-0">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-2xl text-gray-900 mb-1">
                    {message.song.title}
                  </div>
                  <div className="text-lg text-gray-600 mb-1">
                    {message.song.artist}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {message.song.album}
                  </div>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    <Music className="w-4 h-4 mr-2" />
                    Play on Spotify
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Section */}
          <div className="p-8 border-t border-gray-200">
            <div className="flex items-center gap-6 mb-6">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 transition-colors ${
                  liked ? "text-red-600" : "text-gray-600 hover:text-red-600"
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-red-600" : ""}`} />
                <span>{liked ? message.likes + 1 : message.likes} likes</span>
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="w-5 h-5" />
                <span>{comments.length} comments</span>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors ml-auto">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Add Comment */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <Textarea
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                  />
                  <Button
                    onClick={handleAddComment}
                    disabled={!comment.trim()}
                    className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white disabled:opacity-50"
                  >
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl text-gray-900 mb-6">
            Comments ({comments.length})
          </h2>
          <div className="space-y-6">
            {comments.map((c) => (
              <div key={c.id} className="flex gap-3">
                <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-900">{c.user}</span>
                    <span className="text-sm text-gray-500">{c.time}</span>
                  </div>
                  <p className="text-gray-700">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
