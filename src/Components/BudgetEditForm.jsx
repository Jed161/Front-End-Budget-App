import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;
// if we need to edit something - we need the value it has curently;
// what kind of req do we need to make for that?