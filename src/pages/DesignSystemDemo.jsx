import React, { useState } from 'react';

const DesignSystemDemo = () => {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <div className="p-8 flex flex-col gap-12 animate-mac-fade-in">
            <header className="flex flex-col gap-2">
                <h1 className="mac-h1">macOS Design System</h1>
                <p className="mac-body text-[var(--mac-text-secondary)]">A premium, glassmorphism-based design system inspired by macOS Sonoma.</p>
            </header>

            <section className="flex flex-col gap-6">
                <h2 className="mac-h2">Windows & Layout</h2>
                <div className="mac-window w-full max-w-4xl h-[400px] flex">
                    <aside className="mac-sidebar p-4 flex flex-col gap-2">
                        <div className="mac-traffic-lights mb-4">
                            <div className="mac-dot mac-dot-close" />
                            <div className="mac-dot mac-dot-min" />
                            <div className="mac-dot mac-dot-max" />
                        </div>
                        {['Home', 'Downloads', 'Documents', 'Applications', 'Recents'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveTab(item)}
                                className={`mac-nav-item ${activeTab === item ? 'active' : ''}`}
                            >
                                <span className="w-4 h-4 bg-current/20 rounded-sm" />
                                {item}
                            </button>
                        ))}
                    </aside>
                    <main className="flex-1 p-8 bg-mac-surface-opaque/50">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="mac-h2">{activeTab}</h3>
                            <input type="text" className="mac-search" placeholder="Search files..." />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mac-card flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-lg bg-mac-blue/10 flex items-center justify-center text-mac-blue mb-2">
                                    📁
                                </div>
                                <h4 className="mac-body font-semibold">User Documents</h4>
                                <p className="mac-caption">1.2 GB • Modified 2h ago</p>
                                <div className="flex gap-2 mt-2">
                                    <button className="mac-button-primary">Open</button>
                                    <button className="mac-button-secondary">Share</button>
                                </div>
                            </div>
                            <div className="mac-card flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-lg bg-mac-green/10 flex items-center justify-center text-mac-green mb-2">
                                    📝
                                </div>
                                <h4 className="mac-body font-semibold">Project Notes</h4>
                                <p className="mac-caption">45 KB • Modified 10m ago</p>
                                <div className="flex gap-2 mt-2">
                                    <button className="mac-button-secondary">Edit</button>
                                    <button className="mac-button-ghost">Delete</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                    <h2 className="mac-h2">Buttons & Controls</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="mac-button-primary">Primary Button</button>
                        <button className="mac-button-secondary">Secondary</button>
                        <button className="mac-button-ghost">Ghost</button>
                        <div className="mac-badge">New Feature</div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <input type="checkbox" className="mac-checkbox" defaultChecked />
                        <span className="mac-body">Checkbox Example</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="mac-caption">Input Field</span>
                        <input type="text" className="mac-input w-64" placeholder="Enter text..." />
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h2 className="mac-h2">Typography</h2>
                    <div className="flex flex-col gap-4 p-6 mac-card">
                        <h1 className="mac-h1">Heading 1</h1>
                        <h2 className="mac-h2">Heading 2</h2>
                        <p className="mac-body">This is the body text. It uses SF Pro (or the system equivalent) for a clean, legible look.</p>
                        <p className="mac-caption">Small caption text for metadata or legal info.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6">
                <h2 className="mac-h2">Glassmorphism (Vibrancy)</h2>
                <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="mac-popup p-8 flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full blur-[1px] absolute -top-4 -left-4 animate-pulse" />
                        <h3 className="mac-h2">Floating Panel</h3>
                        <p className="mac-body text-center max-w-[200px]">Real-time backdrop blur and saturation boost.</p>
                        <button className="mac-button-primary w-full">Got it</button>
                    </div>
                    <div className="absolute bottom-4 right-4 mac-badge bg-white/20 text-white border-white/30 backdrop-blur-md">
                        Dynamic Gradient Background
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DesignSystemDemo;
