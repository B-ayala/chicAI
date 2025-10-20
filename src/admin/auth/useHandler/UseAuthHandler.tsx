/* import { redirect, useLocation, useNavigate } from "react-router-dom";
import { clearAuth, isAuthenticated, redirectToLogin } from "../Auth";
import { useEffect, useRef, useState } from "react";

export function UseAuthHandler({ onAuthChecked }: { onAuthChecked: (value: boolean) => void }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [authed, setAuthed] = useState<boolean>(isAuthenticated());
    const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

        useEffect(() => {
        const params = new URLSearchParams(location.search);
        const otc_code = params.get('code');
        if (!isAuthenticated() && !otc_code) {
            clearAuth();
            redirectToLogin();
            return;
        }

 */
export {};
