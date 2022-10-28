import React, { useContext, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import GithubContext from '../../contexts/github/githubContext';

const User = () => {
  const { login } = useParams();
  const githubContext = useContext(GithubContext);
  const githubContextRef = useRef(useContext(GithubContext));
  useEffect(() => {
    githubContextRef.current.getUser(login)
  }, [login]);
  return (
    <img src={githubContext.user.avatar_url} alt="text img" style={{width: '60px'}}/>
  )
}

export default User;