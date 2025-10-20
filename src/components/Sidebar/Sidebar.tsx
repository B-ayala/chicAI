import React from 'react';
import { SidebarContainer, SidebarHeader, SidebarSection } from './styled';

export interface SidebarSectionItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  path?: string;
}

export interface SidebarProps {
  header?: React.ReactNode;
  sections: Array<{
    title?: string;
    items: SidebarSectionItem[];
  }>;
  variant?: 'admin' | 'public';
  styleOverrides?: React.CSSProperties;
}

const Sidebar: React.FC<SidebarProps> = ({
  header,
  sections,
  variant = 'public',
  styleOverrides,
}) => {
  return (
    <SidebarContainer variant={variant} style={styleOverrides}>
      {header && <SidebarHeader>{header}</SidebarHeader>}
      {sections.map((section, idx) => (
        <SidebarSection key={idx}>
          {section.title && <div className="sidebar-section-title">{section.title}</div>}
          <ul>
            {section.items.map((item, i) => (
              <li key={i} onClick={item.onClick} className="sidebar-item">
                {item.icon && <span className="sidebar-icon">{item.icon}</span>}
                {item.label}
              </li>
            ))}
          </ul>
        </SidebarSection>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
