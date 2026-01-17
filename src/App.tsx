import React, { useMemo, useState } from "react";

type Tab = "home" | "alerts" | "sos" | "help" | "profile";

type Alert = {
  id: string;
  title: string;
  type: "Flood" | "Earthquake" | "Fire" | "Storm";
  severity: "Low" | "Medium" | "High";
  location: string;
  time: string;
  tip: string;
};

const badgeColor = (severity: Alert["severity"]) => {
  if (severity === "High") return "bg-red-500/20 text-red-200 border-red-500/30";
  if (severity === "Medium") return "bg-yellow-500/20 text-yellow-100 border-yellow-500/30";
  return "bg-green-500/20 text-green-200 border-green-500/30";
};

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [query, setQuery] = useState("");

  const alerts: Alert[] = useMemo(
    () => [
      {
        id: "a1",
        title: "Flash Flood Warning",
        type: "Flood",
        severity: "High",
        location: "Noida Sector 62",
        time: "15 min ago",
        tip: "Avoid low-lying roads and underpasses.",
      },
      {
        id: "a2",
        title: "Earthquake Alert",
        type: "Earthquake",
        severity: "Medium",
        location: "Gurugram Cyber City",
        time: "1 hour ago",
        tip: "Drop, Cover, and Hold On. Stay away from windows.",
      },
      {
        id: "a3",
        title: "Fire Risk Advisory",
        type: "Fire",
        severity: "Low",
        location: "Delhi – Dwarka",
        time: "2 hours ago",
        tip: "Keep emergency exits clear and avoid open flames.",
      },
    ],
    []
  );

  const filteredAlerts = alerts.filter((a) =>
    (a.title + a.location + a.type).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen flex flex-col">
        {/* Top Bar */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center">
              🛡️
            </div>
            <div className="flex-1">
              <div className="text-lg font-semibold leading-tight">CrisisMap</div>
              <div className="text-xs text-white/60">
                Live alerts • Safe routes • SOS help
              </div>
            </div>
          </div>

          <div className="mt-4">
            <input
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/20"
              placeholder="Search alerts, locations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pb-24">
          {tab === "home" && (
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
                <div className="text-sm text-white/70">Current location</div>
                <div className="text-lg font-semibold">Connaught Place, Delhi</div>
                <div className="mt-2 inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full border border-green-500/30 bg-green-500/15 text-green-200">
                  ✅ Safe Zone • Updated 2 min ago
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    className="rounded-2xl bg-white/10 border border-white/10 py-2 text-xs"
                    onClick={() => setTab("help")}
                  >
                    Nearest Help
                  </button>
                  <button
                    className="rounded-2xl bg-white/10 border border-white/10 py-2 text-xs"
                    onClick={() => setTab("alerts")}
                  >
                    View Alerts
                  </button>
                  <button
                    className="rounded-2xl bg-white/10 border border-white/10 py-2 text-xs"
                    onClick={() => alert("Route planning demo (UI only)")}
                  >
                    Safe Route
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Recent Alerts</div>
                <button
                  className="text-xs text-white/60 hover:text-white"
                  onClick={() => setTab("alerts")}
                >
                  View all →
                </button>
              </div>

              <div className="space-y-3">
                {alerts.slice(0, 2).map((a) => (
                  <div
                    key={a.id}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold">{a.title}</div>
                        <div className="text-xs text-white/60 mt-1">
                          {a.location} • {a.time}
                        </div>
                      </div>
                      <div
                        className={`text-[11px] px-2 py-1 rounded-full border ${badgeColor(
                          a.severity
                        )}`}
                      >
                        {a.severity}
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-white/70">{a.tip}</div>
                  </div>
                ))}
              </div>

              {/* Floating SOS */}
              <div className="fixed bottom-24 right-4 w-[390px] max-w-[390px] pointer-events-none">
                <div className="flex justify-end px-4">
                  <button
                    className="pointer-events-auto h-14 w-14 rounded-2xl bg-red-600/90 border border-red-500/40 shadow-lg shadow-red-500/20 flex items-center justify-center"
                    onClick={() => setTab("sos")}
                    title="SOS"
                  >
                    🚨
                  </button>
                </div>
              </div>
            </div>
          )}

          {tab === "alerts" && (
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Live Alerts</div>
                <div className="text-xs text-white/60 mt-1">
                  Verified alerts (demo data)
                </div>
              </div>

              <div className="space-y-3">
                {filteredAlerts.map((a) => (
                  <div
                    key={a.id}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold">{a.title}</div>
                        <div className="text-xs text-white/60 mt-1">
                          {a.type} • {a.location} • {a.time}
                        </div>
                      </div>
                      <div
                        className={`text-[11px] px-2 py-1 rounded-full border ${badgeColor(
                          a.severity
                        )}`}
                      >
                        {a.severity}
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-white/70">{a.tip}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "sos" && (
            <div className="space-y-4">
              <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-4">
                <div className="text-sm font-semibold">SOS Emergency Mode</div>
                <div className="text-xs text-white/70 mt-1">
                  This is a UI demo. No real calls are made.
                </div>
              </div>

              <button
                className="w-full rounded-3xl bg-red-600/90 border border-red-500/40 py-4 font-semibold"
                onClick={() => alert("SOS sent (demo)")}
              >
                Send SOS Now
              </button>

              <button
                className="w-full rounded-3xl bg-white/10 border border-white/10 py-4"
                onClick={() => setTab("help")}
              >
                Nearest Help
              </button>
            </div>
          )}

          {tab === "help" && (
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Nearest Help</div>
                <div className="text-xs text-white/60 mt-1">
                  Hospitals & police stations nearby
                </div>
              </div>

              {[
                { name: "AIIMS Hospital", dist: "3.2 km", eta: "9 min" },
                { name: "Safdarjung Hospital", dist: "4.8 km", eta: "14 min" },
                { name: "Connaught Place Police Station", dist: "1.4 km", eta: "6 min" },
              ].map((s) => (
                <div key={s.name} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-white/60 mt-1">
                    {s.dist} • ETA {s.eta}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      className="flex-1 rounded-2xl bg-white/10 border border-white/10 py-2 text-sm"
                      onClick={() => alert("Calling (demo)")}
                    >
                      Call
                    </button>
                    <button
                      className="flex-1 rounded-2xl bg-white/10 border border-white/10 py-2 text-sm"
                      onClick={() => alert("Navigation (demo)")}
                    >
                      Navigate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "profile" && (
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Profile & Settings</div>
                <div className="text-xs text-white/60 mt-1">
                  Manage alerts & preferences
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                ✅ Dark mode UI <br />
                ✅ Emergency contacts (demo) <br />
                ✅ Notification preferences (demo)
              </div>
            </div>
          )}
        </div>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0B0F14]/95 backdrop-blur border-t border-white/10">
          <div className="mx-auto w-full max-w-[390px] px-4 py-3 grid grid-cols-5 gap-2 text-xs">
            <NavButton label="Home" active={tab === "home"} onClick={() => setTab("home")} />
            <NavButton label="Alerts" active={tab === "alerts"} onClick={() => setTab("alerts")} />
            <NavButton label="SOS" active={tab === "sos"} onClick={() => setTab("sos")} />
            <NavButton label="Help" active={tab === "help"} onClick={() => setTab("help")} />
            <NavButton label="Profile" active={tab === "profile"} onClick={() => setTab("profile")} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border px-2 py-2 ${
        active
          ? "bg-white/10 border-white/20"
          : "bg-transparent border-white/10 text-white/70"
      }`}
    >
      {label}
    </button>
  );
}
