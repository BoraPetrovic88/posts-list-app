import { useLocation, useParams } from "react-router-dom";

interface Params {
  id: string;
}

export default function usePostQueryParams() {
  const { id } = useParams<Params>();

  const { pathname } = useLocation();
  const pathnameId = pathname.split("/")[2];
  const postId: number = id ? parseInt(id) : parseInt(pathnameId);

  return { postId };
}
