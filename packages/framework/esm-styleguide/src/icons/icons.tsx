/** @category Icons */
import React, { forwardRef, memo } from 'react';
import classNames, { type Argument } from 'classnames';

export type IconProps = {
  className?: Argument;
  fill?: string;
  size?: number;
};
/**
 */
export const ActivityIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ActivityIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-activity" iconProps={props} />;
  }),
);

/**
 */
export const AddIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function AddIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-add" iconProps={props} />;
  }),
);

/**
 */
export const ArrowDownIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ArrowDownIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-arrow-down" iconProps={props} />;
  }),
);

/**
 */
export const ArrowLeftIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ArrowLeftIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-arrow-left" iconProps={props} />;
  }),
);

/**
 */
export const ArrowRightIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ArrowRightIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-arrow-right" iconProps={props} />;
  }),
);

/**
 */
export const ArrowUpIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ArrowUpIcon(props: IconProps, ref) {
    return <Icon ref={ref} icon="omrs-icon-arrow-up" iconProps={props} />;
  }),
);

/**
 */
export const ChartAverageIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ChartAverageIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-chart-average" iconProps={props} />;
  }),
);

/**
 */
export const ChemistryIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ChemistryIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-chemistry" iconProps={props} />;
  }),
);

/**
 */
export const ChevronDownIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ChevronDownIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-chevron-down" iconProps={props} />;
  }),
);

/**
 */
export const ChevronLeftIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ChevronLeftIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-chevron-left" iconProps={props} />;
  }),
);

/**
 */
export const ChevronRightIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ChevronRightIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-chevron-right" iconProps={props} />;
  }),
);

/**
 */
export const ChevronUpIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ChevronUpIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-chevron-up" iconProps={props} />;
  }),
);

/**
 */
export const CloseFilledIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function CloseFilledIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-close-filled" iconProps={props} />;
  }),
);

/**
 */
export const CloseIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function CloseIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-close" iconProps={props} />;
  }),
);

/**
 */
export const CloseOutlineIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function CloseOutlineIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-close-outline" iconProps={props} />;
  }),
);

/**
 */
export const DownloadIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function DownloadIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-download" iconProps={props} />;
  }),
);

/**
 */
export const EditIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function EditIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-edit" iconProps={props} />;
  }),
);

/**
 */
export const ImageMedicalIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ImageMedicalIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-image-medical" iconProps={props} />;
  }),
);

/**
 * Note this is an alias for ImageMedicalIcon
 */
export const RadiologyIcon = ImageMedicalIcon;

/**
 */
export const ListCheckedIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ListCheckedIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-list-checked" iconProps={props} />;
  }),
);

/**
 * Conditions
 *
 * Note this is an alias for ListCheckedIcon
 */
export const ConditionsIcon = ListCheckedIcon;

/**
 */
export const LocationIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function LocationIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-location" iconProps={props} />;
  }),
);

/**
 * Billing
 */
export const MoneyIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function MoneyIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-money" iconProps={props} />;
  }),
);

/**
 */
export const MicroscopeIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function MicroscopeIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-microscope" iconProps={props} />;
  }),
);

/**
 */
export const ResetIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function EditIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-reset" iconProps={props} />;
  }),
);

/**
 */
export const TranslateIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function TranslateIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-translate" iconProps={props} />;
  }),
);

/**
 */
export const SaveIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function SaveIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-save" iconProps={props} />;
  }),
);

/**
 */
export const SearchIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function SearchIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-search" iconProps={props} />;
  }),
);

/**
 */
export const SwitcherIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function SwitcherIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-switcher" iconProps={props} />;
  }),
);

/**
 * Order Basket, the UI to enter Orders for Medications, Referrals, Labs, Procedures and more
 */
export const ShoppingCartIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ShoppingCartIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-shopping-cart" iconProps={props} />;
  }),
);

/**
 * Used as a button to add an item to the Order basket from a search
 */
export const ShoppingCartArrowDownIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ShoppingCartArrowDownIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-shopping-cart--arrow-down" iconProps={props} />;
  }),
);

/**
 * Used as a button to add an item to the Order basket from a search
 *
 * Note this is an alias for ShoppingCartArrowDownIcon
 */
export const ShoppingCartAddItemIcon = ShoppingCartArrowDownIcon;

/**
 * Lab investigations
 */
export const TimeIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function TimeIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-time" iconProps={props} />;
  }),
);

/**
 */
export const ToolsIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function ToolsIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-tools" iconProps={props} />;
  }),
);

/**
 */
export const TrashCanIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function TrashCanIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-trash-can" iconProps={props} />;
  }),
);

/**
 * User of OpenMRS e.g. My Account
 */
export const UserAvatarIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function UserAvatarIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-user-avatar" iconProps={props} />;
  }),
);

/**
 */
export const UserXrayIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function UserXrayIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-user-xray" iconProps={props} />;
  }),
);

/**
 */
export const WarningIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(function WarningIcon(props, ref) {
    return <Icon ref={ref} icon="omrs-icon-warning" iconProps={props} />;
  }),
);

/**
 */
export const AllergiesIcon = WarningIcon;

export type SvgIconProps = {
  icon: string;
  iconProps: IconProps;
};

/**
 * This is a utility type for custom icons that use the svg-sprite-loader to bundle custom icons
 */
export const Icon = memo(
  forwardRef<SVGSVGElement, SvgIconProps>(function Icon({ icon, iconProps }, ref) {
    let { className, fill, size } = Object.assign({}, { fill: 'currentColor', size: 20 }, iconProps);
    if (size <= 0 || size > 72) {
      console.error(`Invalid size '${size}' specified for ${icon}. Defaulting to 20.`);
      size = 20;
    }

    return (
      <svg ref={ref} className={classNames(className)} height={size} width={size} fill={fill}>
        <use xlinkHref={`#${icon}`} />
      </svg>
    );
  }),
);
