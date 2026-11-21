
import { createClient } from
"https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://mplvpzhmyjqoxkddgwhw.supabase.co";
const SUPABASE_KEY = "sb_publishable_NaBONcDRH4_KogvDeE0b7Q_qmvDEYP5";

const db = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function testConnection() {
  const connection = document.getElementById("connection");

  if (!connection) return;

  connection.textContent = "Connecting...";

  const { error } = await db
    .from("tournaments")
    .select("id")
    .limit(1);

  connection.textContent = error
    ? "Database Error: " + error.message
    : "🔥 FF Battle Arena Database Connected!";
}

testConnection();
