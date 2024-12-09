import React from 'react';
import { MessageSquare, ThumbsUp, Users } from 'lucide-react';

const forumPosts = [
  {
    id: 1,
    title: "How I scaled to $50k/month using video ads",
    author: "Alex Morrison",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    replies: 24,
    likes: 156,
    category: "Case Study"
  },
  {
    id: 2,
    title: "Best suppliers for trending products 2024",
    author: "Linda Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    replies: 45,
    likes: 89,
    category: "Suppliers"
  },
  {
    id: 3,
    title: "Facebook ads strategy that's crushing it",
    author: "Mike Peters",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    replies: 67,
    likes: 234,
    category: "Marketing"
  }
];

export function ForumPreview() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join the Conversation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Connect with successful entrepreneurs in our private community
          </p>
        </div>

        <div className="mt-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {forumPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.avatar}
                      alt={post.author}
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {post.replies} replies
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {post.likes} likes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://discord.gg/brainbox-ecom-lab-1153608350790062160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <Users className="h-5 w-5 mr-2" />
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}