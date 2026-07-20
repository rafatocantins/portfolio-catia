'use client';

import { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const rafRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    let timeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      if (!isVisible) setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      clearTimeout(timeout);
    };

    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = targetPos.current.x - prev.x;
        const dy = targetPos.current.y - prev.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 0.5) return prev;

        const ease = 0.08;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      rafRef.current = requestAnimationFrame(updateTrailing);
    };

    const observeHoverTargets = () => {
      const hoverSelector = 'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]';
      const elements = document.querySelectorAll(hoverSelector);

      const handleEnter = () => setIsHovering(true);
      const handleLeave = () => setIsHovering(false);

      elements.forEach((el) => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });

      const observer = new MutationObserver(() => {
        const newElements = document.querySelectorAll(hoverSelector);
        newElements.forEach((el) => {
          if (!elements.length || !Array.from(elements).includes(el)) {
            el.addEventListener('mouseenter', handleEnter);
            el.addEventListener('mouseleave', handleLeave);
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
        elements.forEach((el) => {
          el.removeEventListener('mouseenter', handleEnter);
          el.removeEventListener('mouseleave', handleLeave);
        });
      };
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafRef.current = requestAnimationFrame(updateTrailing);

    const cleanupObserver = observeHoverTargets();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cleanupObserver();
      clearTimeout(timeout);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  const mainSize = 8;
  const trailBaseSize = 40;
  const trailHoverSize = 60;

  const trailScale = isHovering
    ? trailHoverSize / trailBaseSize
    : 1;

  return (
    <>
      {/* Main cursor dot */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: position.x - mainSize / 2,
          top: position.y - mainSize / 2,
          width: mainSize,
          height: mainSize,
          borderRadius: '50%',
          backgroundColor: '#FFD527',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          mixBlendMode: 'difference',
        }}
      />

      {/* Trailing magnetic ring */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: trailingPos.x - trailBaseSize / 2,
          top: trailingPos.y - trailBaseSize / 2,
          width: trailBaseSize,
          height: trailBaseSize,
          borderRadius: '50%',
          border: '1.5px solid #FFD527',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? (isHovering ? 0.35 : 0.6) : 0,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-radius 0.3s ease',
          transform: `scale(${trailScale}) translate(${(trailBaseSize * (trailScale - 1)) / -2}px, ${(trailBaseSize * (trailScale - 1)) / -2}px)`,
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};
