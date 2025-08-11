"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name") || "User";

  const [userPosts, setUserPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  // ✅ Resolve params (in case it's a promise)
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params; // unwrap the promise
      setUserId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  // ✅ Fetch posts once userId is available
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };

    if (userId) fetchPosts();
  }, [userId]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
