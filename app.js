
import { createClient } from
"https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "sb_publishable_NaBONcDRH4_KogvDeE0b7Q_qmvDEYP5";
const SUPABASE_KEY = "sb_publishable_NaBONcDRH4_KogvDeE0b7Q_qmvDEYP5";

const db = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function testConnection() {
  const { data, error } = await db
    .from("tournaments")
    .select("id")
    .limit(1);

  const message = error
    ? "Database Error: " + error.message
    : "🔥 FF Battle Arena Database Connected!";

  document.getElementById("connection").textContent = message;
}

testConnection();
